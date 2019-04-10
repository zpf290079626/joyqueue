package com.jd.journalq.handler.routing.command.broker;

import com.jd.journalq.handler.error.ConfigException;
import com.jd.journalq.handler.routing.command.NsrCommandSupport;
import com.jd.journalq.model.domain.Broker;
import com.jd.journalq.model.query.QBroker;
import com.jd.journalq.service.BrokerService;
import com.jd.laf.web.vertx.annotation.Body;
import com.jd.laf.web.vertx.annotation.Path;
import com.jd.laf.web.vertx.annotation.QueryParam;
import com.jd.laf.web.vertx.response.Response;
import com.jd.laf.web.vertx.response.Responses;

import static com.jd.journalq.handler.Constants.ID;

/**
 * @author wylixiaobin
 * Date: 2018/10/17
 */
public class BrokerCommand extends NsrCommandSupport<Broker,BrokerService,QBroker> {

    @Override
    @Path("delete")
    public Response delete(@QueryParam(ID) String id) throws Exception {
        Broker newModel = service.findById(Long.valueOf(id));
        int count = service.delete(newModel);
        if (count <= 0) {
            throw new ConfigException(deleteErrorCode());
        }
        //publish(); 暂不进行发布消息
        return Responses.success();
    }

    @Path("get")
    public Response get(@QueryParam(ID) Object id) throws Exception {
        Broker newModel = service.findById(Long.valueOf(id.toString()));
        if (newModel == null) {
            throw new ConfigException(getErrorCode());
        }
        return Responses.success(newModel);
    }

    @Path("findByTopic")
    public Response findByTopic(@Body(type = Body.BodyType.TEXT) String topicFullName) throws Exception {
        return Responses.success(service.findByTopic(topicFullName));
    }

}
