function sayHello() {
    var defaultLanguage = lookupDefault();
    return "Hello, " + defaultLanguage.getName() + "!";
}
