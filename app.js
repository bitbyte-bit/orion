if('serviceWorker' in navigator){
    window.addEventListener('load',()=>{
        navigator.serviceWorker.register('service-worker.js').then(reg=>console.log('serviceWorker registered',reg)).catch(err=>console.log('serviceWorker registration failed',err));
    });
}