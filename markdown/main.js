// update
const update = (value) => {
    let box = e('#id-content')
    // 使用 remarkable
    let md = new Remarkable()
    box.innerHTML = md.render(value)
}
// save
const save = () => {
    let editer = e('#id-source')
    let sour = editer.value
    let s = sty(sour)
    localStorage.source = s
}
const type = (v) => typeof v
// load
const load = () => {
    if (localStorage.source === undefined) {
        localStorage.source = sty(default_content)
    }
    let s = par(localStorage.source)
    // log('type s', type(v))
    let editer = e('#id-source')
    editer.value = s
    update(s)
}
const actions = {
    edit_markdown(event) {
        let v = event.target.value
        update(v)
        save()
    },
}
// event
const bindAction = () => {
    let body = e('body')
    bindEvent(body, 'keyup', event => {
        // log('target', event.target)
        let action = event.target.dataset.action
        log('action', action)
        actions[action] && actions[action](event)
    })
}
const __main = () => {
    load()
    bindAction()
}
__main()