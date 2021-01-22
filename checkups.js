'use strict';
//#region IS
const is = {
		empty: (subject) => typeof subject === `undefined` || subject === undefined,
		func: (subject) =>
			typeof subject === `function` || subject instanceof Function,
		obj: (subject) => typeof subject === `object`,
		_null: (subject) => is.obj(subject) && subject === null,
		array: (subject) => has.obj(subject) && subject instanceof Array,
		str: (subject) => typeof subject === `string`,
		num: (subject) => typeof subject === `number`,
		tag: (subject) =>
			subject instanceof Element || subject instanceof HTMLElement,
	},
	//#endregion IS
	//#region HAS
	has = {
		usable: (subject) => !is.empty(subject),
		_null: (subject) => subject === null,
		none: (subject) =>
			has.usable(subject) &&
			!has._null(subject) &&
			(is.str(subject) || is.array(subject) ? subject.length > 0 : true) &&
			subject !== '' &&
			subject !== '' &&
			subject !== `` &&
			subject !== false,
		obj: (subject) => is.obj(subject) && !is._null(subject),
		array: (subject) => is.array(subject) && subject.length > 0,
		str: (subject) =>
			is.str(subject) &&
			subject.length > 0 &&
			subject !== '' &&
			subject !== '' &&
			subject !== ``,
		html: (subject) => subject instanceof HTMLElement,
		svg: (subject) => subject instanceof SVGAElement,
		canvas: (subject) => subject instanceof HTMLCanvasElement,
	},
	//#endregion HAS
	//#region REGEX - REGEXP
	regex = {
		txt: (subject) => /^[a-z]{1,}$/i.test(subject),
		str: (subject) => /^[a-z#\$\^!~%,\.@\+?><]{1,}$/i.test(subject),
		hex: (subject) => /^(#[a-f0-9]{3,12}|[a-f0-9]{3,12})$/i.test(subject),
		num: (subject) => /^[0-9]{1,}$/.test(subject),
		sign: (subject) => /^-{0,1}[0-9]{1,}$/.test(subject),
		_sign: (subject) => /^-{1}[0-9]{1,}$/.test(subject),
		float: (subject) => /^[0-9]{1,}\.[0-9]{1,}$/.test(subject),
		signF: (subject) => /^-{0,1}[0-9]{1,}\.[0-9]{1,}$/.test(subject),
		_signF: (subject) => /^-{1}[0-9]{1,}\.[0-9]{1,}$/.test(subject),
		numF: (subject) => /^[0-9]{1,}(\.[0-9]{1,}|[0-9]{0,})$/.test(subject),
		email: (subject) =>
			/^[a-z]{1,}([_a-z0-9\.]{0,}|[a-z])[a-z0-9]{1,}@{1}[a-z]{3,}(\.[a-z]{2,4}|\.[a-z]{2,4}\.[a-z]{2,4})$/i.test(
				subject
			),
	},
	//#endregion REGEX - REGEXP
	//#region DOCK - DOCUMENT
	/**
	 * DOCK
	 * @description
	 * dock is a object to contain any function for working with dom and document object
	 */
	dock = {
		/**
		 * dock.id
		 * @param {string} text for selecting id
		 * @description
		 * stand of document.getElementById();
		 */
		id: (subject) => has.str(subject) && document.getElementById(subject),
		// class workstation
		_class: (subject, index) => {
			if (has.str(subject)) {
				let c = document.getElementsByClassName(subject);
				return regex.num(index) ? c[Number(index)] : c;
			} else return false;
		},
		addClass: (subject, className) => {
			if (has.str(subject)) c = dock._class(subject);
			else if (has.html(subject)) c = subject;
			else return false;

			if (has.str(className)) {
				if (has.array(c)) c.forEach((i) => i.classList.add(className));
				else c.classList.add(className);
				return true;
			} else return false;
		},
		removeClass: (subject, className) => {
			if (has.str(subject)) c = dock._class(subject);
			else if (has.html(subject)) c = subject;
			else return false;

			if (has.str(className)) {
				if (has.array(c)) c.forEach((i) => i.classList.remove(className));
				else c.classList.remove(className);
				return true;
			} else return false;
		},
		toggle: (subject, className1, className2) => {
			if (has.str(subject)) c = dock._class(subject);
			else if (has.html(subject)) c = subject;
			else return false;

			if (has.str(className1)) {
				if (has.usable(className2) && has.str(className2)) {
					let regex1 = new RegExp(className1);
					let regex2 = new RegExp(className2);
					if (has.array(c)) {
						c.forEach((i) => {
							if (regex1.test(i.className)) {
								i.classList.remove(className1);
								i.classList.add(className2);
							} else if (regex2.test(i.className)) {
								i.classList.remove(className2);
								i.classList.add(className1);
							}
						});
					} else {
						if (regex1.test(c.className)) {
							c.classList.remove(className1);
							c.classList.add(className2);
						} else if (regex2.test(c.className)) {
							c.classList.remove(className2);
							c.classList.add(className1);
						}
					}
					return true;
				} else {
					if (has.array(c)) c.forEach((i) => i.classList.toggle(className1));
					else c.classList.add(className1);
					return true;
				}
			} else return false;
		},
		create: (subject) =>
			has.str(subject) &&
			regex.str(subject) &&
			document.createElement(subject.toLowerCase()),
		ready: (callback) =>
			is.func(callback) &&
			document.addEventListener('readystatechange', callback, false),
	},
	//#endregion DOCK - DOCUMENT
	//#region RUNNABLE - EXECUTING
	run = {
		error: (_false, _true) => {
			console.error(
				`[checkups.js]\n\nDATA_TYPE_ERROR : check data type and change it!\n\n>>> CURRENT_TYPE: "${typeof _false}"\n>>> SHOULD_TYPE_BE: "${_true}"\n\n`
			);
			return false; // this maybe return `undefined`;
		},
		success: (_func) => (is.func(_func) ? _func() : _func),
		usable: (subject, success, error = run.error) =>
			has.usable(subject)
				? run.success(success)
				: error(subject, 'non-undefined'),
		str: (subject, success, error = run.error) =>
			has.str(subject) ? run.success(success) : error(subject, 'string'),
		txt: (subject, success, error = run.error) =>
			regex.txt(subject) ? run.success(success) : error(subject, 'string'),
		obj: (subject, success, error = run.error) =>
			has.obj(subject) ? run.success(success) : error(subject, 'object'),
		array: (subject, success, error = run.error) =>
			has.array(subject) ? run.success(success) : error(subject, 'array'),
		num: (subject, success, error = run.error) =>
			regex.num(subject) ? run.success(success) : error(subject, 'number'),
		sign: (subject, success, error = run.error) =>
			regex.sign(subject) ? run.success(success) : error(subject, 'number'),
		float: (subject, success, error = run.error) =>
			regex.float(subject) ? run.success(success) : error(subject, 'number'),
		signF: (subject, success, error = run.error) =>
			regex.signF(subject) ? run.success(success) : error(subject, 'number'),
		none: (subject, success, error = run.error) =>
			has.none(subject) ? run.success(success) : run.success(error),
	},
	//#endregion RUNNABLE - EXECUTING
	//#region ALL
	all = {
		usable: (...subjects) => {
			let checked = [];
			subjects.forEach((subject) => checked.push(has.usable(subject)));
			return !checked.includes(false); // 'or' => checked.includes(true);
			// default 'and' => !checked.includes(false);
		},
		html: (...subjects) => {
			let checks = [];
			subjects.forEach((subject) => checks.push(has.html(subject)));
			return !checks.includes(false);
		},
	},
	//#endregion ALL
	//#region SOME
	some = {
		usable: (...subjects) => {
			let checks = [];
			subjects.forEach((subject) => checks.push(has.usable(subject)));
			return checks.includes(true);
		},
		html: (...subjects) => {
			let checks = [];
			subjects.forEach((subject) => checks.push(has.html(subject)));
			return checks.includes(true);
		},
	};
//#endregion SOME
