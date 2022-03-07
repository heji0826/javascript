const stringify = (obj) => {
    const isArray = (value) => {
        return Array.isArray(value) && typeof value === 'object';
    };
    const isObject = (value) => {
        return typeof value === 'object' && value !== null && !Array.isArray(value);
    };
    const isString = (value) => {
        return typeof value === 'string';
    };
    const isBoolean = (value) => {
        return typeof value === 'boolean';
    };
    const isNull = (value) => {
        return value === null && typeof value === 'object';
    };
    const isNotNum = (value) => {
        return typeof value === 'number' && !isFinite(value);
    };
    const isInfinity = (value) => {
        return typeof value === 'number' && !isFinite(value);
    }
    const isDate = (value) => {
        return typeof value === 'object' && value !== null && typeof value.getMonth === 'function';
    };
    const isUndefined = (value) => {
        return value === undefined && typeof value === 'undefined';
    };
    const isFunction = (value) => {
        return typeof value === 'function';
    };
    const isSymbol = (value) => {
        return typeof value === 'symbol';
    };
    const restData = (value) => {
        return isNumber(value) || isString(value) || isBoolean(value);
    };
    const ignoreData = (value) => {
        return isUndefined(value) || isFunction(value) || isSymbol(value);
    };
    const nullData = (value) => {
        return isNotNum(value) || isInfinity(value) || isNull(value);
    };
    const arrayNull = (value) => {
        return isNotNum(value) || isInfinity(value) || isNull(value) || ignoreData(value);
    };
    const removeComma = (str) => {
        const temp = str.split('');
        temp.pop();
        return temp.join('');
    };
    if (ignoreData(obj)){
        return undefined;
    }
    if (isDate(obj)){
        return `"${obj.toISOString()}"`;
    }
    if(nullDataTypes(obj)) {
        return `${null}`
    }
    if(isSymbol(obj)) {
        return undefined;
    }
    if(restData(obj)){
        const pass = isString(obj) ? `"` : '';
        return `${pass}${obj}${pass}`;
    }
    if (isArray(obj)) {
        let arr = '';
        obj.forEach((val) => {
            arr += arrayNull(val) ? 
        }

        )
    }
}