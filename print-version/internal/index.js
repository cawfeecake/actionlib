function printInGroup(title, toPrint) {
    console.log(`::group::${title}`);
    console.log(toPrint);
    console.log('::endgroup::');
}

printInGroup('`process.arch`', JSON.stringify(process.arch, null, 2))
printInGroup('`process.argv`', JSON.stringify(process.argv, null, 2))
printInGroup('`process.env`', JSON.stringify(process.env, null, 2))
printInGroup('`process.version`', process.version)
printInGroup('`process.versions`', JSON.stringify(process.versions, null, 2))
