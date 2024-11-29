import React from "react";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

interface props {
    children: React.ReactNode;
}

export function CommonView(props: props) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "100dvh",
            }}
        >
            {/* ヘッダー */}
            <Header />
            {/* メインコンテンツ */}
            <div
                style={{
                    height: "80dvh",
                    width: "100vw",
                    backgroundColor: "#afafaf",
                    overflowY: "scroll",
                }}
            >
                {props.children}
            </div>
            {/* フッター */}
            <Footer />
        </div>
    );
}
