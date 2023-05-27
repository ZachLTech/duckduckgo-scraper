    const texts = Array.from(divs).flatMap(div => {
    const spans = div.querySelectorAll('span');
    return Array.from(spans).map(span => span.innerHTML);
    });

    texts.forEach(text => console.log(text));