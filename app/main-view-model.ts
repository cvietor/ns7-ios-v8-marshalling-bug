import { Dialogs, Observable } from "@nativescript/core";

export class HelloWorldModel extends Observable {
	constructor() {
		super();
	}

	onTap() {
		const coordinates: CLLocationCoordinate2D[] = [
			CLLocationCoordinate2DMake(1, 2),
			CLLocationCoordinate2DMake(60, 190),
		];

		const refCoords = this.toReferenceToCArray(coordinates, CLLocationCoordinate2D);
  	console.log('-------------> refCoords :', refCoords);
	}

	// see: https://github.com/NativeScript/ios-runtime/issues/1263#issuecomment-602615528
	toReferenceToCArray<T>(a: T[], type: interop.Type<T>): interop.Reference<T> {
		const ref = new interop.Reference<T>(
			type,
			interop.alloc(interop.sizeof(type) * a.length)
		);

		for (let i = 0; i < a.length; i++) {
			ref[i] = a[i];
		}

		return ref;
	}
}
