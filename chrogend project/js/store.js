// js/store.js - Local Storage State Management for MathVibe

const Store = {
  // Key names
  KEYS: {
    USER: 'mathvibe_user',
    PROGRESS: 'mathvibe_progress', // { lessonId: { status: 'started'|'completed', page: 1, bookmark: boolean } }
    QUIZ_RESULTS: 'mathvibe_quiz_results', // [ { quizId, lessonId, score, percentage, passed, date } ]
    ACHIEVEMENTS: 'mathvibe_achievements', // [ achievementId ]
    STREAK: 'mathvibe_streak', // { lastLoginDate: 'YYYY-MM-DD', count: 1 }
    THEME: 'mathvibe_theme'
  },

  // Initialize store defaults
  init() {
    if (!localStorage.getItem(this.KEYS.USER)) {
      // Default demo student
      const defaultUser = {
        id: 1,
        name: 'Chrogend',
        email: 'chrogend@mathvibe.org',
        role: 'student',
        department: 'Mathematics'
      };
      localStorage.setItem(this.KEYS.USER, JSON.stringify(defaultUser));
    }

    if (!localStorage.getItem(this.KEYS.PROGRESS)) {
      localStorage.setItem(this.KEYS.PROGRESS, JSON.stringify({}));
    }

    if (!localStorage.getItem(this.KEYS.QUIZ_RESULTS)) {
      localStorage.setItem(this.KEYS.QUIZ_RESULTS, JSON.stringify([]));
    }

    if (!localStorage.getItem(this.KEYS.ACHIEVEMENTS)) {
      localStorage.setItem(this.KEYS.ACHIEVEMENTS, JSON.stringify(['math_pioneer']));
    }

    this.updateStreak();
  },

  getUser() {
    return JSON.parse(localStorage.getItem(this.KEYS.USER)) || null;
  },

  setUser(user) {
    localStorage.setItem(this.KEYS.USER, JSON.stringify(user));
  },

  logout() {
    localStorage.removeItem(this.KEYS.USER);
  },

  getProgress() {
    return JSON.parse(localStorage.getItem(this.KEYS.PROGRESS)) || {};
  },

  getLessonProgress(lessonId) {
    const prog = this.getProgress();
    return prog[lessonId] || { status: 'not_started', page: 1, bookmark: false };
  },

  saveLessonProgress(lessonId, data) {
    const prog = this.getProgress();
    prog[lessonId] = { ...(prog[lessonId] || { status: 'not_started', page: 1, bookmark: false }), ...data };
    localStorage.setItem(this.KEYS.PROGRESS, JSON.stringify(prog));
    this.checkAchievements();
  },

  toggleBookmark(lessonId) {
    const prog = this.getProgress();
    const current = prog[lessonId] || { status: 'not_started', page: 1, bookmark: false };
    current.bookmark = !current.bookmark;
    prog[lessonId] = current;
    localStorage.setItem(this.KEYS.PROGRESS, JSON.stringify(prog));
    return current.bookmark;
  },

  getQuizResults() {
    return JSON.parse(localStorage.getItem(this.KEYS.QUIZ_RESULTS)) || [];
  },

  saveQuizResult(result) {
    const results = this.getQuizResults();
    results.unshift(result); // prepend
    localStorage.setItem(this.KEYS.QUIZ_RESULTS, JSON.stringify(results));
    this.checkAchievements();
  },

  getAchievements() {
    return JSON.parse(localStorage.getItem(this.KEYS.ACHIEVEMENTS)) || [];
  },

  awardAchievement(id) {
    const achievements = this.getAchievements();
    if (!achievements.includes(id)) {
      achievements.push(id);
      localStorage.setItem(this.KEYS.ACHIEVEMENTS, JSON.stringify(achievements));
    }
  },

  updateStreak() {
    const today = new Date().toISOString().split('T')[0];
    const streakData = JSON.parse(localStorage.getItem(this.KEYS.STREAK)) || { lastLoginDate: '', count: 1 };
    
    if (streakData.lastLoginDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      if (streakData.lastLoginDate === yesterday) {
        streakData.count += 1;
      } else if (streakData.lastLoginDate !== '') {
        streakData.count = 1;
      }
      streakData.lastLoginDate = today;
      localStorage.setItem(this.KEYS.STREAK, JSON.stringify(streakData));
    }

    if (streakData.count >= 3) {
      this.awardAchievement('streak_3');
    }
  },

  getStreakCount() {
    const streakData = JSON.parse(localStorage.getItem(this.KEYS.STREAK)) || { count: 1 };
    return streakData.count;
  },

  checkAchievements() {
    const progress = this.getProgress();
    const results = this.getQuizResults();

    let completedCount = 0;
    Object.keys(progress).forEach(lessonId => {
      if (progress[lessonId].status === 'completed') {
        completedCount++;
      }
    });

    if (completedCount >= 5) this.awardAchievement('master_5_topics');
    if (completedCount >= 10) this.awardAchievement('master_10_topics');
    if (completedCount >= 15) this.awardAchievement('master_15_topics');
    if (completedCount >= 20) this.awardAchievement('master_all_topics');

    // Perfect quiz check
    if (results.some(r => r.percentage === 100)) {
      this.awardAchievement('quiz_whiz');
    }
  }
};

// Initialize Store
Store.init();
