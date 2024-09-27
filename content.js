window.onload = function () {
    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'visible') {
            // 浏览器窗口变为可见，可以执行一些操作
            chrome.runtime.sendMessage({ visible: true, auto: a });
        }
    });
}