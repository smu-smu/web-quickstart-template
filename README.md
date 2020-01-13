# web-quickstart-template

빠른 웹 개발환경을 설정하기 위한 템플릿

## 시작하기

---

1.  Create React App (혹은 Create Next App)을 통해 프로젝트를 생선한다.

        npx create-react-app (프로젝트명) --template=typescript

2.  라이브러리 설치

    - Redux

            yarn add redux react-redux redux-devtools-extension @reduxjs/toolkit @types/react-redux

    - Redux Saga

            yarn add redux-saga

    - ESLint

            # ESLint Typescript support
            yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
            # ESLint config
            yarn add --dev eslint-config-airbnb
            # ESLint plugin
            yarn add --dev eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks

      VS Code ESLint 확장을 통해서도 설치 가능

    - Prettier

            yarn add --dev eslint-config-prettier eslint-plugin-prettier

3.  template 폴더에 있는 파일 중 필요한 것들만 복사하여 프로젝트로 옮긴다.

    - .github

      - deploy-gh-pages.yaml (선택)

        Github pages에 배포하기 위한 Github Actions Workflow

    - .vscode

      - extensions.json

        프로젝트에 필요한 확장을 다른 환경에서 설치하도록 추천하기 위해 사용

      - react.code-snippets
      - redux-toolkit.code-snippets
      - settings.json

    - src
      - app
        - rootReducer.ts
        - rootSaga.ts
        - store.ts

## 스니펫

---

- react.code-snippets

  **rfcp:** React Function Component with Props

        import React from 'react';

        interface I${FILENAME}Props {}

        function ${FILENAME}({} : I${FILENAME}Props) {
          return (<div></div>);
        }

        export default ;

- redux-toolkit.code-snippets

  **cra**: Create action with toolkit

        createAction<$1>($2)

  **crape**: Create empty payload action with toolkit

        createAction($0)

  **crr**: Create reducer with toolkit

        createReducer<$2>($1, {
          [$3]: (state: $2, action) => {
            return {};
          }
        });

  **rehook**: Redux hooks

        import { useSelector, useDispatch } from "react-redux";

        export default function use$1() {
          const $2 = useSelector(($3) => $4);
          const dispatch = useDispatch();

          return { $2 };
        }

  **read**: Add redux action to dispatch

        const $1 = useCallback(
          () => {
            dispatch($2());
          }, [dispatch]
        );

## 추가 자료

---

[Integrating with Linters · Prettier](https://prettier.io/docs/en/integrating-with-linters.html#recommended-configuration)
