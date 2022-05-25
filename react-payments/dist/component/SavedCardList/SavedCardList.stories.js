import { jsx as _jsx } from "react/jsx-runtime";
import { action } from "@storybook/addon-actions";
import { withReactContext } from "storybook-react-context";
import SavedCardList from "component/SavedCardList/SavedCardList.component";
import { CardDataContext } from "provider/CardDataProvider";
export default {
    title: "SavedCardList",
    component: SavedCardList,
    decorators: [
        withReactContext({
            Context: CardDataContext,
            initialState: {
                cardData: {
                    1: {
                        cardName: "우연 카드",
                        cardNumber: {
                            first: "1112",
                            fourth: "3142",
                            second: "3213",
                            third: "2321",
                        },
                        cardTypeInfo: {
                            cardType: "branCard",
                            cardName: "브랜 카드",
                        },
                        month: "11",
                        year: "12",
                        userName: "우연",
                    },
                    2: {
                        cardName: "스밍 카드",
                        cardNumber: {
                            first: "1112",
                            fourth: "3142",
                            second: "3213",
                            third: "2321",
                        },
                        cardTypeInfo: {
                            cardType: "pocoCard",
                            cardName: "포코 카드",
                        },
                        month: "11",
                        year: "12",
                        userName: "스밍",
                    },
                },
                dispatch: action("dispatch"),
            },
        }),
    ],
};
export const DefaultSavedCardList = (args) => (_jsx(SavedCardList, Object.assign({}, args)));
DefaultSavedCardList.args = {};
//# sourceMappingURL=SavedCardList.stories.js.map