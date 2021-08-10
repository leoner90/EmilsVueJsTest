let blogList =  [
	{ 
			header: "This is first Header", 
			body: "BlogText BlogText BlogText BlogText BlogText BlogText BlogText BlogText BlogText "
	},
	{ 
			header: "This is first Header2", 
			body: "BlogText BlogText BlogText BlogText BlogText BlogText BlogText BlogText BlogText2 "
	}
]

var BlogListContent = '';
if(window.localStorage.getItem('newsGlobalVar')){
	BlogListContent = window.localStorage.getItem('newsGlobalVar');
} else {
		var blogListStringified = JSON.stringify(blogList);
    window.localStorage.setItem('newsGlobalVar', blogListStringified); // save data
    BlogListContent = window.localStorage.getItem('newsGlobalVar');
}
var ReturnBlogList = JSON.parse(BlogListContent);

export default ReturnBlogList