// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginUnicorn from "eslint-plugin-unicorn"
import reactPlugin from "eslint-plugin-react"
import jsxA11y from "eslint-plugin-jsx-a11y"

/** @type {import('eslint').Linter.Config} */
const anyOtherConfigDefinedWithEslintTypes = {};

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  // All of the following are giving the error:
  // Type '17' is not assignable to type 'EcmaVersion'. ts(2345)
  eslintPluginUnicorn.configs.recommended,
  reactPlugin.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  anyOtherConfigDefinedWithEslintTypes,
);
