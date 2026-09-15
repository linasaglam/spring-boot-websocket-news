package lab13.rowd.websocket;

public class NewsResponse {

    private String content;

    public NewsResponse() {
    }

    public NewsResponse(String content) {
        this.content = content;
    }

    public String getContent() {
        return content;
    }
}