
declare class SCSDKLoginButton extends UIView {

	static alloc(): SCSDKLoginButton; // inherited from NSObject

	static appearance(): SCSDKLoginButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SCSDKLoginButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SCSDKLoginButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SCSDKLoginButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SCSDKLoginButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SCSDKLoginButton; // inherited from UIAppearance

	static new(): SCSDKLoginButton; // inherited from NSObject

	delegate: SCSDKLoginButtonDelegate;

	constructor(o: { completion: (p1: boolean, p2: NSError) => void; });

	initWithCompletion(completion: (p1: boolean, p2: NSError) => void): this;
}

interface SCSDKLoginButtonDelegate {

	loginButtonDidTap(): void;
}
declare var SCSDKLoginButtonDelegate: {

	prototype: SCSDKLoginButtonDelegate;
};

declare class SCSDKLoginClient extends NSObject {

	static addLoginStatusObserver(observer: SCSDKLoginStatusObserver): void;

	static alloc(): SCSDKLoginClient; // inherited from NSObject

	static applicationOpenURLOptions(application: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean;

	static applicationOpenURLOptionsCompletion(application: UIApplication, url: NSURL, options: NSDictionary<string, any>, completion: (p1: boolean, p2: NSError) => void): boolean;

	static clearToken(): void;

	static fetchUserDataWithQueryVariablesSuccessFailure(query: string, variables: NSDictionary<string, any>, success: (p1: NSDictionary<any, any>) => void, failure: (p1: NSError, p2: boolean) => void): void;

	static getAccessToken(): string;

	static handleConnectFromSnapchatURLFetchCodeVerifierBlockCompletion(url: NSURL, fetchCodeVerifierBlock: (p1: string, p2: (p1: string, p2: NSError) => void) => void, completion: (p1: boolean, p2: NSError) => void): boolean;

	static hasAccessToScope(scope: string): boolean;

	static loginFromViewControllerCompletion(viewController: UIViewController, completion: (p1: boolean, p2: NSError) => void): void;

	static loginFromViewControllerOptionsCompletion(viewController: UIViewController, options: SCSnapKitFeatureOptions, completion: (p1: boolean, p2: NSError) => void): void;

	static new(): SCSDKLoginClient; // inherited from NSObject

	static refreshAccessTokenWithCompletion(completion: (p1: string, p2: NSError) => void): void;

	static removeLoginStatusObserver(observer: SCSDKLoginStatusObserver): void;

	static readonly isUserLoggedIn: boolean;
}

declare const enum SCSDKLoginKitRefreshTokenErrorCode {

	None = 0,

	TokenRevoked = 1,

	Unknown = 999
}

declare const enum SCSDKLoginKitVerifyErrorCode {

	None = 0,

	CouldNotVerify = 1,

	InvalidPhoneNumber = 2
}

interface SCSDKLoginStatusObserver extends NSObjectProtocol {

	scsdkLoginDidUnlink?(): void;

	scsdkLoginLinkDidFail?(): void;

	scsdkLoginLinkDidStart?(): void;

	scsdkLoginLinkDidSucceed?(): void;
}
declare var SCSDKLoginStatusObserver: {

	prototype: SCSDKLoginStatusObserver;
};

declare class SCSDKVerifyClient extends NSObject {

	static alloc(): SCSDKVerifyClient; // inherited from NSObject

	static applicationOpenURLOptions(application: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean;

	static new(): SCSDKVerifyClient; // inherited from NSObject

	static verifyAndLoginFromViewControllerPhoneRegionCompletion(viewController: UIViewController, phone: string, region: string, completion: (p1: boolean, p2: string, p3: string, p4: NSError) => void): void;

	static verifyFromViewControllerPhoneRegionCompletion(viewController: UIViewController, phone: string, region: string, completion: (p1: string, p2: string, p3: NSError) => void): void;
}

declare class SCSnapKitFeatureOptions extends NSObject {

	static alloc(): SCSnapKitFeatureOptions; // inherited from NSObject

	static new(): SCSnapKitFeatureOptions; // inherited from NSObject

	profileLinkEnabled: boolean;
}
