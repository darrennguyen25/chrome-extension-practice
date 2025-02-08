chrome.action.onClicked.addListener((tab) => {
    chrome.scripting
        .executeScript({
        func: () => {
            const myButton = document.createElement("button");
            myButton.textContent = "Say hello to the World!";
            myButton.onclick = () => {
                alert("Hello World!");
            };
            document.body.appendChild(myButton);
        },
        target: {
            tabId: tab.id || 0,
        },
    })
        .then(() => {
        console.log("Button inserted");
    })
        .catch((err) => {
        console.error("Button not inserted", err);
    });
});
export {};
