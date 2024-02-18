console.log('::group::`process.arch`');
console.log(
    JSON.stringify(process.arch, null, 2)
);
console.log('::endgroup::');

console.log('::group::`process.env`');
console.log(
    JSON.stringify(process.env, null, 2)
);
console.log('::endgroup::');
