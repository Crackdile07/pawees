function showPage() {
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    const page = urlParams.get('page');
    if (page) {
      document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('visible');
      });
      document.getElementById(`page${page}`).classList.add('visible');
    }
  }
  
  // 页面加载完成后显示正确的内容
  window.addEventListener('load', showPage);
  
  // 当 hash 发生变化时，重新显示页面
  window.addEventListener('hashchange', showPage);