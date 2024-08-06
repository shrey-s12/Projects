let body = document.body;
body.style.display = "flex";
body.style.justifyContent = "center";

// Main Container
let container = document.createElement('div');
body.appendChild(container);
container.style.border = "3px solid black";
container.style.minHeight = "60vh";
container.style.width = "35vw";
container.style.marginTop = "20px";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.padding = "0 10px 10px 20px"

// H1 tag
let h1 = document.createElement('h1')
h1.innerText = "Add a new Blog Post";
container.appendChild(h1);

// input for Title
let input = document.createElement('input');
input.id = "titles";
input.placeholder = "Title";
input.style.height = "20px";
input.style.width = "200px";
input.style.borderRadius = "4px";
container.appendChild(input);

// input for Content
let input1 = document.createElement('textArea');
input1.id = "contents";
input1.placeholder = "Content";
input1.rows = "7";
input1.style.width = "250px";
input1.style.marginTop = "30px";
input1.style.borderRadius = "4px";
container.appendChild(input1);

// add Post Button
let addButton = document.createElement('button');
addButton.innerText = "Add Post";
addButton.style.height = "20px";
addButton.style.width = "90px";
addButton.style.marginTop = "30px";
container.appendChild(addButton);

// one more h1 tag
let h2 = document.createElement('h1')
h2.innerText = "Blog Posts";
container.appendChild(h2);

// When we press enter key after writing the content, it will automatically click the enter button
input1.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        addButton.click();
    }
});

addButton.addEventListener('click', () => {

    let title = document.getElementById('titles');
    let titleValue = title.value.trim();
    if (titleValue == "") {
        alert("Title is Empty!!");
        return;
    }

    let content = document.getElementById('contents');
    let contentValue = content.value.trim();
    if (contentValue == "") {
        alert("Content is Empty!!");
        return;
    }

    // New container for Add new posts
    let blogPost = document.createElement('div');
    blogPost.style.border = "2px solid grey";
    blogPost.style.padding = "0px 5px 5px 5px";
    blogPost.style.marginTop = "5px";
    container.appendChild(blogPost);

    // Add title in new container
    let blogTitle = document.createElement('h2');
    blogTitle.className = "blogTitles";
    blogTitle.innerText = titleValue;
    blogPost.appendChild(blogTitle);

    // Add text in new container
    let p = document.createElement('span');
    p.innerText = "Posted On: ";
    blogPost.appendChild(p);

    // Add date in new container
    let date = document.createElement('span');
    date.innerText = new Date();
    blogPost.appendChild(date);

    // Add content in new conatiner
    let blogContent = document.createElement('p');
    blogContent.className = "blogContent";
    blogContent.innerText = contentValue;
    blogPost.appendChild(blogContent);

    // Delete Button
    let dltButton = document.createElement('button');
    dltButton.innerText = "Delete Post";
    blogPost.appendChild(dltButton);

    dltButton.addEventListener('click', () => {
        container.removeChild(blogPost);
    });
    input.value = "";
    input1.value = "";
});