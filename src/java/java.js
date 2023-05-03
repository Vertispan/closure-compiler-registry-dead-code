/**
 *
 * @constructor
 * @implements ProgrammingLanguage
 */
function JavaLanguage() {

}
JavaLanguage.prototype.getName = function() {
    return "Java";
};
register("java", () => new JavaLanguage());
