import meta from '$lib/assets/meta.json';

export function getProxiedMeta() {
	const enumMeta = new Proxy(meta.enumMeta, {
		get(target, prop) {
			if (typeof prop == 'string' && prop in target && `${target[prop].codeName}` != 'null') {
				const bracketed = `(${prop})`;
				const value = target[prop as string];
				if (!value.codeName?.includes(bracketed)) {
					value.codeName = `${value.codeName} ${bracketed}`;
				}
				return value;
			} else {
				return { codeName: prop as string };
			}
		}
	});
	return enumMeta;
}

export function getProxiedMetaWithClone() {
	const enumMeta = new Proxy(structuredClone(meta.enumMeta), {
		get(target, prop) {
			if (typeof prop == 'string' && prop in target && `${target[prop].codeName}` != 'null') {
				const bracketed = `(${prop})`;
				const value = target[prop as string];
				if (!value.codeName?.includes(bracketed)) {
					value.codeName = `${value.codeName} ${bracketed}`;
				}
				return value;
			} else {
				return { codeName: prop as string };
			}
		}
	});
	return enumMeta;
}
