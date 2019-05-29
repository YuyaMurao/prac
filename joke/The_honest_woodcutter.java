/*
ただ出力をぬるぽにしたかっただけ
出力:
きこりは手を滑らせなかったため斧を湖に落としませんでした。
女神が現れ、きこりに尋ねた。「あなたが落としたのは
Exception in thread "main" java.lang.NullPointerException
    at The_honest_woodcutter.main(The_honest_woodcutter.java:6)
 */
public class The_honest_woodcutter {
    public static void main(String[] args) {
        String str = null;
        System.out.println("きこりは手を滑らせなかったため斧を湖に落としませんでした。");
        System.out.print("女神が現れ、きこりに尋ねた。「あなたが落としたのは");
        System.out.print(str.toString());
        System.out.print("ですね？");
    }
}