import { Injectable, NgModule } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ConfigProvider } from "./providers/config/config";

import { HTTP_INTERCEPTORS } from "@angular/common/http";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    config:any;
    constructor(private configProvider: ConfigProvider) {

    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): 
    Observable<HttpEvent<any>> {
        this.config = this.configProvider.getConfigData();
        console.log(this.config)
        const authRequest = req.clone({headers:req.headers.set(
            'Authorization',`${this.config.token}`)
        });
        return next.handle(authRequest);
    }

};

@NgModule({
    providers:[
        {
            provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true
        }
    ]
})

export class InterceptorModule {}