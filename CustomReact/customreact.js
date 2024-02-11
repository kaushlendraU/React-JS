function customRender(raectElement, container) {

    // first method without using loop it,s not vary good ptactice
    /* 
        const domElement = document.createElement(raectElement.type);
        domElement.innerHTML = raectElement.children;
        domElement.setAttribute('href',raectElement.props.href);
        domElement.setAttribute('target',raectElement.props.target);
        container.appendChild(domElement); */

    // second method using loop it,s  good ptactice

    const domElement = document.createElement(raectElement.type);

    domElement.innerHTML = raectElement.children;

    for (const prop in raectElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, raectElement.props[prop])
    }
    container.appendChild(domElement);
}

const raectElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.getElementById('root')

customRender(raectElement, mainContainer)