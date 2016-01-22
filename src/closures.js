/**
 * This variable is a set of functions declared as closures.
 *
 * @author: Jovanny Pablo Cruz Gomez.
 *          Software Engineer.
 *          jovannypcg@yahoo.com
 */
var codeGenerator = function() {
    /** The code that is supposed to be generated. */
    var code = 'This is a top secret code';

    /*
     * The set of closures are declared in the next lines.
     * This could be read as: 'return the next set of functions the
     * this variable has enabled'.
     */
    return {
        /**
         * Gets the current code.
         */
        get: function() {
            return code;
        },

        /**
         * Sets the new code sent as parameter.
         */
        build: function(newCode) {
            code = newCode;
        }
    }
}

var code = codeGenerator();

console.log('The current code is: ' + code.get());

// Changing the current code for a new one.
code.build('Another code provided as function parameter =)');

console.log('The code after have been built is: ' + code.get());
