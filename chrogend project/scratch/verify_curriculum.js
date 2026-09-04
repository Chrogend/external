const fs = require('fs');
const content = fs.readFileSync('./js/data.js', 'utf8');
const fn = new Function(content + '; return CURRICULUM_DATA;');
const topics = fn();

console.log('Total Topics Count:', topics.length);
topics.forEach((t, i) => {
  console.log(`${i + 1}. [${t.code}] ${t.title} -> ${t.contentPages.length} pages, ${t.quiz.questions.length} quiz questions`);
});
