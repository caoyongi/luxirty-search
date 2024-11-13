<template>
  <div class="about-container">
    <div class="search-container" id="searchContainer">
      <h1 class="search-title" @click="goHome" role="link" tabindex="0">Yonx Search</h1>
    </div>
    <div class="content">
      <h2>关于 Yonx Search</h2>
      <div class="content-section">
        <p>Yonx Search 是一个基于 Google 的自定义搜索引擎，专为提高搜索效率而设计。</p>
      </div>
      <div class="content-section">
        <h3>主要特性:</h3>
        <ul>
          <li>屏蔽内容农场和低质量网站</li>
          <li>无广告，无跟踪</li>
          <li>干净、简洁、快速的界面</li>
          <li>针对程序员优化的搜索选项</li>
          <li>一键搜索特定网站(如 GitHub、Stack Overflow 等)</li>
        </ul>
      </div>
      <div class="content-section">
        <p>Yonx Search 旨在为用户提供更高效、更有针对性的搜索体验，让您更快地找到所需的信息。</p>
        <p>本项目基于 <a href="https://github.com/KoriIku/luxiry-search" target="_blank">Luxiry Search</a> 开发。</p>
      </div>
    </div>
    <footer>
      <p>
        &copy; <a href="https://xiaowangye.org" target="_blank">xiaowangye.org</a>.
        Forked from <a href="https://github.com/KoriIku/luxiry-search" target="_blank">
          Luxiry Search.
        </a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    goHome() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: var(--center-width);
  min-width: 320px;
  box-sizing: border-box;
  margin: 0 auto;
}

.search-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 26px;
  margin-left: 28px;
  min-height: 48px;
}

.search-title {
  font-size: 24px;
  color: #58636f;
  margin-right: 20px;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;
}

.content {
  flex-grow: 1;
  padding: 0 28px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.03rem; /* 新增: 设置内容的字体大小 */
}

.content-section {
  margin-bottom: 30px;
}

h2, h3 {
  color: var(--color-heading);
  margin-bottom: 20px;
}

ul {
  padding-left: 20px;
  list-style-position: outside;
}

li {
  font-size: 1.03rem;
}

footer {
  text-align: center;
  padding: 10px 0;
  font-size: 14px;
  color: #6c757d;
  margin-top: 36px;
}

footer a {
  color: #345a80;
  text-decoration: none;
  transition: color 0.3s ease;
}

footer a:hover {
  color: #1c3d5a;
  text-decoration: underline;
}

@media (max-width: 600px) {
  .search-container {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 0px;
    min-height: 48px;
    width: 100%;
  }

  .search-title {
    font-size: 20px;
    margin-bottom: 10px;
    margin-right: 0;
  }

  .home-link {
    margin-left: 0;
    margin-top: 10px;
    font-size: 20px;
  }
}

@media (prefers-color-scheme: dark) {
  .about-container {
    background-color: #222;
    color: #f0f0f0;
  }

  .search-title, .home-link {
    color: #d1d5db;
  }

  .search-title:hover, .home-link:hover {
    color: #a0c3e0;
  }

  footer {
    background-color: #222222;
    color: #cccccc;
    border-top: 1px solid #444444;
  }

  footer a {
    color: #80a0c2;
  }

  footer a:hover {
    color: #a0c3e0;
  }
}

p {
  line-height: 1.8;
  margin-bottom: 15px;
}

ul {
  padding-left: 20px;
  list-style-position: outside;
}

li {
  font-size: 1.03rem;
}

@media (max-width: 600px) {
  .search-container {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 0px;
    min-height: 48px;
    width: 100%;
  }

  .search-title {
    font-size: 20px;
    margin-bottom: 10px;
    margin-right: 0;
  }

  .home-link {
    margin-left: 0;
    margin-top: 10px;
    font-size: 20px;
  }
}

@media (prefers-color-scheme: dark) {
  .about-container {
    background-color: #222;
    color: #f0f0f0;
  }

  .search-title, .home-link {
    color: #d1d5db;
  }

  .search-title:hover, .home-link:hover {
    color: #a0c3e0;
  }

  footer {
    background-color: #222222;
    color: #cccccc;
    border-top: 1px solid #444444;
  }

  footer a {
    color: #80a0c2;
  }

  footer a:hover {
    color: #a0c3e0;
  }
}

p {
  line-height: 1.8;
  margin-bottom: 15px;
}

ul {
  padding-left: 20px;
  list-style-position: outside;
}

li {
  font-size: 1.03rem;
}
</style>
