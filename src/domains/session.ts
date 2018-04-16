import * as $ from "jquery";

const URL_TALK="https://jsonplaceholder.typicode.com/posts";
const promise$ = $.get(URL_TALK);

promise$.then(data =>
      console.log(data)
);