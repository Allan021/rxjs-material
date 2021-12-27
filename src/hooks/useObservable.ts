import { useEffect } from "react";
import { Observable } from "rxjs";

export const useObservable = (observable$: Observable<any>, setter: any) => {
  useEffect(() => {
    const subs = observable$.subscribe((value) => {
      setter(value);
    });
    return () => {
      subs.unsubscribe();
    };
  }, [setter, observable$]);
};
