import { Injectable, NgModule } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ConfigProvider } from "./providers/config/config";

import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { User } from "./app/shared/user.model";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private configProvider: ConfigProvider) {
        
    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): 
    Observable<HttpEvent<any>> {
        let user:User = JSON.parse(localStorage.getItem('user'));
        const authRequest = req.clone({headers:req.headers.set(
            'Authorization',`${user.token}`)
        });

        console.log(authRequest);
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