function createElement (type, config, children) {
    console.log(type, config, children, '?')
    if (config) {
        delete config.__self
        delete config.__source
    }

    const props = {
        ...config,
        children,
        mreact: true
    }

    return {
        type,
        props
    }
}

export default {
    createElement
}