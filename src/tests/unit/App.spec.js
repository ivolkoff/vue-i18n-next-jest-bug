import "@testing-library/jest-dom";
import { createI18n } from "vue-i18n";
import { config, mount } from '@vue/test-utils';
import Form from './../../components/Form.vue';

export const i18n = createI18n({
	legacy: false,
	fallbackLocale: 'en',
	fallbackWarn: false,
	missingWarn: false,
});

config.global.plugins = [
	i18n,
];

describe("App Internationalization", () => {
	test.each(['en', 'ru', 'uk'])('renders correctly %s', locale => {
		i18n.global.locale.value = locale;
		const wrapper = mount(Form);
		expect(wrapper.element).toMatchSnapshot();
	});
});
