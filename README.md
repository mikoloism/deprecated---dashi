# **checkups (_chekCups_)**

> this file many helpful javascript library for checking data types and get work with `document` object (not fully DOM) as `dock`

## **Index**

-   [Usage](#Usage)
    -   [Requires](#Requires)
    -   [Keywords](#Keywords)
-   [Logs](#Logs)
-   [Issues](#Issues)

---

## **Usage**

[⬆️ Index](#Index)

-   [Usage](#Usage)
    -   [Requires](#Requires)
    -   [Keywords](#Keywords)

### Requires

yes, actually, i say to you, just add below line into your **HTML/PUG/JADE** file and for other type of **_extensions(e.g. React-Js, Angular, Vue, and other_**); we not have idea?! 🤷 🤷‍♂️

> _maybe on the next time_, we add many more component for any **_node-base library and frameworks_**

-   **HTML**:
    ```html
    <script
    	type="text/javascript"
    	src="https://cdn.jsdelivr.net/gh/miko-github/Chekcups/checkups.js"
    	crossorigin="anonymous"
    ></script>
    ```
-   **PUG/JADE**:
    ```pug
    script(type="text/javascript", src="https://cdn.jsdelivr.net/gh/miko-github/Chekcups/checkups.js", crossorigin="anonymous")
    ```

### Keywords

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

## **Logs**

[⬆️ Index](#Index)

tomorrow, i say about other

## **Issues**

[⬆️ Index](#Index)

-   [ ] **documentation** for heads and keywords of Script
-   [x] create _CDN_ of [git repo][1] for _globally usage_
-   [ ] need severally modifiers
-   [ ] README FILE : adding index section
-   [ ] Add `When`, `Where` and `it` and glob KyWord
-   [ ] Add Multiple Argument to Kywords
-   [-] Try **Currying Functions** (_canceled_)

<!-- links -->

[1]: (https://github.com/miko-github/Chekcups.git)
