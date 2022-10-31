function first() {
  setTimeout(() => {
    console.log("1");
  }, 500);
}

function second() {
  console.log("2");
}

first();
second();

function js(lang, callback) {
  console.log(`first goes here and ${lang}`);
  callback();
}

function done() {
  console.log("done");
}

js("hi", done);
