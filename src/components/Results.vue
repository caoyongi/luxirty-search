<template>
  <div class="my-container">
    <div class="search-container" id="searchContainer">
      <h1 class="search-title" @click="goHome" role="link" tabindex="0">Yonx Search</h1>
      <div class="gcse-searchbox"></div>
      <router-link to="/about" class="about-link">关于</router-link>
    </div>
    <div class="search-result-zone">
      <div class="gcse-searchresults" data-linkTarget="_blank" data-refinementStyle="link"></div>
    </div>
    <footer>
      <p>
        &copy; <a href="https://www.yonx.net" target="_blank">yonx.net</a>.
        Forked from <a href="https://github.com/KoriIku/luxiry-search" target="_blank">
          Luxiry Search.
        </a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'SearchPage',
  mounted() {
    this.loadGoogleCSE();
    this.setupResultsRenderedCallback();  // 注册渲染结果回调函数
  },
  methods: {
    loadGoogleCSE() {
      const script = document.createElement('script');
      script.src = `https://cse.google.com/cse.js?cx=${import.meta.env.VITE_GOOGLE_CSE_CX}`;
      script.async = true;
      document.head.appendChild(script);
    },
    goHome() {
      // 使用 window.location.href 跳转到根路径
      window.location.href = '/';
    },
    setupResultsRenderedCallback() {
      // 定义一个渲染回调函数，用于移除不需要的属性
      const myWebResultsRenderedCallback = () => {
        const links = document.querySelectorAll('a.gs-title');
        
        links.forEach((anchor) => {
          // 移除 'data-cturl' 和 'data-ctorig' 属性
          anchor.removeAttribute('data-cturl');
          anchor.removeAttribute('data-ctorig');
        });
      };

      // 将回调注册到 Google Custom Search 引擎对象
      window.__gcse || (window.__gcse = {});
      window.__gcse.searchCallbacks = {
        web: {
          rendered: myWebResultsRenderedCallback,
        },
      };
    }
  }
};
</script>
<style scoped>
.my-container {
  display: flex;
  flex-direction: column;
  /* 让子元素垂直排列 */
  min-height: 100vh;
  /* 让容器占满整个视窗高度 */
  max-width: var(--center-width);
  min-width: 320px;
  box-sizing: border-box;
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
  user-select: none;  /* 防止标题文字被选中 */
  cursor: pointer;  /* 添加指针样式 */
  text-decoration: none;  /* 移除默认的下划线 */
  transition: color 0.3s ease;  /* 添加颜色过渡效果 */
}

/* 针对小屏幕的样式 */
@media (max-width: 600px) {
  .search-container {
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 0px;
    min-height: 48px;
    width: 100vw;
  }

  .search-title {
    font-size: 20px;
    margin-bottom: 10px;
    margin-right: 0;
  }
}

/* 黑暗模式样式 */
@media (prefers-color-scheme: dark) {
  .search-title {
    color: #d1d5db;
    /* 黑暗模式下的颜色 */
  }

  .search-title:hover {
    color: #a0c3e0;  /* 黑暗模式下鼠标悬停时的颜色 */
  }

  .search-title:focus {
    outline-color: #a0c3e0;  /* 黑暗模式下的焦点颜色 */
  }
}

.search-result-zone {
  flex-grow: 1;
  /* 让搜索结果区占据剩余空间 */
}

/* Footer styles */
footer {
  background-color: #f8f9fa;
  text-align: center;
  padding: 10px 0;
  font-size: 14px;
  color: #6c757d;
  border-top: 1px solid #dee2e6;
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

footer img {
  width: 16px;
  height: 16px;
  vertical-align: text-top;
  margin-right: 3px;
  opacity: 0.8;
}

@media (prefers-color-scheme: dark) {
  footer {
    background-color: #222222;
    /* 深色背景 */
    color: #cccccc;
    /* 浅灰色字体，确保可读性 */
    border-top: 1px solid #444444;
    /* 深色边框 */
  }

  footer a {
    color: #80a0c2;
    /* 链接颜色改为浅色 */
  }

  footer a:hover {
    color: #a0c3e0;
    /* 悬停时的链接颜色略微加亮 */
  }

  footer img {
    opacity: 0.9;
    /* 提高图像的亮度，适应深色背景 */
  }
}

.about-link {
  margin-left: 20px;
  text-decoration: none;
  color: var(--uv-styles-color-text-default);
}

.about-link:hover {
  text-decoration: underline;
}
</style>
