function tellStory() {
    nounString = document.querySelector('#noun').value
    nounArray = nounString.toLowerCase().split(/\s+/)
    console.log(nounArray)

    adjectiveString = document.querySelector('#adjective').value
    adjectiveArray = adjectiveString.toLowerCase().split(/\s+/)

    verbString = document.querySelector('#verb').value
    verbArray = verbString.toLowerCase().split(/\s+/)

    const myStory =
    `There once was a young <span>${nounArray[0]}</span> named Cinderella.
    Her name was really Ruby but her stepsisters <span>${verbArray[0]}ed</span> her that because
    she was always dirty. One day a <span>${adjectiveArray[0]}</span> invitation arrived
    at the house. The prince was going to have a royal <span>${nounArray[1]}</span>.
    Cinderella was not allowed to go. After the rest of the family was gone,
    Cinderella's fairy <span>${nounArray[2]}</span> came to <span>${verbArray[1]}</span>. She used her magic and 
    Cinderella's rags turned into a <span>${adjectiveArray[1]}</span> dress. She had <span>${adjectiveArray[2]}</span>
    slippers and a coach made out of a <span>${nounArray[3]}</span>. She HAD to be home by midnight 
    or the magic would <span>${verbArray[2]}</span>!`

    document.querySelector('#story').innerHTML = myStory
}