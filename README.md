# checkups

> this file many helpful javascript library for checking data types and get work with `document` object (not fully DOM) as `dock`

## features

-   **is**
    > **`is`** is one object to check manually check data type only with `typeof` javascript keyword
    > this object not can check `instanceof` keyword and only use `typeof` keyword;
    > that functions only return boolean (`true`|`false`) as if value have that type.
    > for example:

```js
let str_test = 'a string value';
let arr_test = [1, 'string', true];

// String method
is.str(str_test); //=> true
is.str(arr_test); //=> false

// Array method
is.array(str_test); //=> false
is.array(arr_test); //=> true
```

-   **has**
    > **`has`** is one object to **_checking data type_** and that **_length if need_**
    > that functions only return boolean (`true`|`false`) as if value have that type.
    > for example:

```js
let str1 = '',
	str2 = 'a string value';
let arr1 = [],
	arr2 = [1, 'string', true];

// String method
has.str(str1); // false
has.str(str2); //=> true; because (typeof str2 === 'string' && str2.length > 0)

// Array method
has.array(arr1); //=> false
has.array(arr2); //=> true; because (typeof arr2 === 'object' && arr2 instanceof Array && arr2.length > 0)
```

-   **regex**
    > **`regex`** is one object to **check value of data with Regular Experience**
    > that functions only return boolean (`true`|`false`) as if value have that match.
    > for example:

```js
// Number check
regex.num(123); //=> true
regex.num('123'); //=> true
regex.num(-34); //=> false
regex.num(3.4); //=> false

// Signed Number
regex.sing(123); //=> true
regex.sing('123'); //=> true
regex.sing('-34'); //=> true
regex.sing(-34); //=> true
regex.sing(3.4); //=> false
regex.sing('3.4'); //=> false

// Float and Number
regex.float(123); //=> true
regex.float('123'); //=> true
regex.float('-34'); //=> false
regex.float(-34); //=> false
regex.float(3.4); //=> true
regex.float('3.4'); //=> true
```

## logs

tomorrow, i say about other
