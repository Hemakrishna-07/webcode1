async function loadBooks() {
    var data = await fetch("https://www.anapioficeandfire.com/api/books", {
        method: "GET",
    })
    try {
        var books = await data.json();
        createBooks(books)
    } catch (errMsg) {
        console.error("An error occured: " , errMsg);
    }
}

loadBooks()

function createBooks(books) {
    books.forEach((book) => {
        document.querySelector(".bookList").innerHTML += `
            <div class="content">

            <div class="booksCard">
                    <h2 id="bookName">${book.name}</h2>
                <div class="booksContainer1">
                    <p><span>Authors:</span> ${book.authors}</p>
                    <p><span>Publisher:</span> ${book.publisher}</p>
                    <p><span>Released on:</span> ${new Date(book.released).toDateString()}</p>
                    <p><span>Total Pages:</span> ${book.numberOfPages}</p>
                    <p><span>isbn:</span> ${book.isbn}</p>
                </div>
                <div class="booksContainer2">
                    <p><span>Characters Played:</span> character1,character2</p>
                </div>
            </div>
        
            </div>`
    })
}

// createBooks(books);
