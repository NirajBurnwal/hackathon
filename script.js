

fetch('https://anapioficeandfire.com/api/books')
.then((apidata)=> {
    // console.log(apidata);
    return apidata.json();
}).then((actualdata)=> {

    console.log('Displaying all details the Books')
    for (const key in actualdata) {
        const element = actualdata[key];
        console.log(element)
    }
    
    const heading= document.createElement('h3');
    heading.innerHTML='Fetching details of all the books from API'
    document.getElementById('myDiv').appendChild(heading);
    
    for (const key in actualdata) {
        const name = actualdata[key].name;
        const isbn = actualdata[key].isbn;
        const numberOfPages = actualdata[key].numberOfPages;
        const authors = actualdata[key].authors;
        const publisher = actualdata[key].publisher;
        const released = actualdata[key].released;

        console.log(name)

        const para= document.createElement('p');
        document.getElementById('myDiv').appendChild(para).innerHTML=`<b>Name of the book </b> :${name.fontcolor("red")},
        <b><i>isbn :</i></b>${isbn},
        <b><i>Author :</i></b>${authors},
        <b><i>numberOfPages :</i></b>${numberOfPages},
        <b><i>publisher :</i></b>${publisher},
        <b><i>Date of released :</i></b>${released},`;
      
    }
    
    

}).catch((error)=> {
    console.log(error);
});


