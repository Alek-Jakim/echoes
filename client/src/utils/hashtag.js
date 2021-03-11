const hashtag = (tags) => {
    const commaIdx = tags[0].indexOf(',');
    const hashIdx = tags[0].indexOf('#');
    let splitTags;

    if (hashIdx !== -1) {
        splitTags = tags[0].split(commaIdx !== -1 ? ',' : ' ').map(tag => {
            return tag.trim();
        });
    } else if (commaIdx !== -1) {
        splitTags = tags[0].split(commaIdx !== -1 ? ',' : ' ').map(tag => {
            return '#' + tag.trim();
        });
    }
    return splitTags.join(' ');
}


export default hashtag;