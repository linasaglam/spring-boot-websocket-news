package lab13.rowd.websocket;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class MyController {

    @MessageMapping("/news")
    @SendTo("/topic/newsfeed")
    public NewsResponse sendNews(News news) {
        return new NewsResponse(news.getText());
    }
}