/**
 *
 * @constructor
 * @implements ProgrammingLanguage
 */
function PythonLanguage() {

}
PythonLanguage.prototype.getName = function() {
    return "Python";
};
register("python", () => new PythonLanguage());
