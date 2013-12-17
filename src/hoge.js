define(function() {
    return {
        add: function(var_args) {
            var args = Array.prototype.slice.call(arguments);
            return args.reduce(function(previousValue, currentValue) {
                return previousValue + currentValue;
            }, 0);
        },
        max: function(a1, a2) {
            return a1 > a2  ? a1 : a2;
        }
    };
});
