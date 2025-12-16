const fs = require('fs');
const path = './README.md';

let readme = fs.readFileSync(path, 'utf8');

const newStats = `
<!-- START: GITHUB STATS -->
## 🚀 GitHub Statistics
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=kaveeshakalhari&show_icons=true&theme=tokyonight" alt="GitHub Stats"/>
  <br>
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=kaveeshakalhari&theme=tokyonight" alt="Streak Stats"/>
  <br>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=kaveeshakalhari&theme=tokyonight&layout=compact" alt="Top Languages"/>
</p>
<!-- END: GITHUB STATS -->
`;

if (readme.includes('<!-- START: GITHUB STATS -->')) {
    readme = readme.replace(/<!-- START: GITHUB STATS -->[\s\S]*?<!-- END: GITHUB STATS -->/, newStats);
} else {
    readme += '\n' + newStats;
}

fs.writeFileSync(path, readme);
console.log('README stats updated!');
