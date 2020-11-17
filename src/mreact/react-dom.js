function render (vnode, container) {
    const node = createNode(vnode, container)
    container.appendChild(node)

}

function updateFunctionComponent (vnode, parentNode) {
    const { type, props } = vnode
    let vvnode = type(props)
    const node = createNode(vvnode, parentNode)
    return node
}

function createNode (vnode, parentNode) {
    let node = null
    const { type, props } = vnode
    console.log(vnode, '$%^&*')
    if (typeof vnode.type === 'string') {
        node = document.createElement(type)
    } else if (type.isReatComp) {
        console.log('i am reactComp')
    } else if (typeof type === 'function'){
        node = (type.isReactComponent)
            ? updateClassComponent(vnode, parentNode)
            : updateFunctionComponent(vnode, parentNode)
    }
    reconcileChildren(props.children, node)
    updateNode(node, props)
    return node
}

function updateClassComponent (vnode, parentNode) {
    const { type, props } = vnode
    let instance = new type(props)
    let vvnode = instance.render()
    const node = createNode(vvnode, parentNode)
    return node
}

function updateNode (node, props) {
    Object.keys(props)
        .filter(key => key !== 'children')
        .forEach(key => {
            if (key.slice(0, 2) === 'on') {
                let eventName = key.slice(2).toLocaleLowerCase()
                node.addEventListener(eventName, props[key])
            }
            node[key] = props[key]
        })
}

function createTextNode (children) {
    return document.createTextNode(children)
}

function reconcileChildren (children = [], container) {
    if (typeof children === 'string') {
        const textNode = createTextNode(children)
        container.appendChild(textNode)
        return
    }
    for (let index = 0; index < children.length; index++) {
        const vnode = children[index];
        render(vnode, container)
    }
}

export default {
    render
}