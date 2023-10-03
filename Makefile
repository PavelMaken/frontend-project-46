install: install-deps
	npx simple-git-hooks

gendiff:
	node bin/gendiff.js

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

test:
	npm test

test-coverage:
	npx test -- --coverage

lint:
	npx eslint .

publish:
	npm publish --dry-run

link-fix:
	npx eslint . --fix
	