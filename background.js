
const intercept_scripts = async (req) => {

    let resp = await fetch(req.url)

    if(resp.status < 200 || resp.status >= 300)
        return

    let page = await resp.text()
    return{cancel:false}
}

browser.webRequest.onBeforeRequest.addListener(
  intercept_scripts,
  {urls: ["<all_urls>"], types: ["script"]},
  ["blocking"]
);


