.PHONY: dist

install:
	@npm --registry=http://registry.npm.taobao.org install

dev: install
	@npm run dev

deploy: install
	@npm run dist
