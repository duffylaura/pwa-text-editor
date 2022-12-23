const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
// need to remove hidden class so can be seen 
window.addEventListener('beforeinstallprompt', (event) => {
    event = window.deferredPrompt; 
    butInstall.classList.toggle('hidden',false); 
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt; //set equal to variable bc no event 
    if (!promptEvent){return} 
    else {promptEvent.prompt();
    window.deferredPrompt = null; //reset to null  
    butInstall.classList.toggle('hidden', true); //return to hidden 
    } 
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
   window.deferredPrompt = null; //rest to null
});
