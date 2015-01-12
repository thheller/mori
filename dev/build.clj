(ns build
  (:require [shadow.cljs.build :as cljs]
            [clojure.java.io :as io]))

(defn release
  [& args]
  (-> (cljs/init-state)
      (cljs/enable-source-maps)
      (assoc :optimizations :advanced
             :pretty-print false
             :work-dir (io/file "target/cljs-work")
             :cache-dir (io/file "target/cljs-cache")
             :cache-level :jars
             :public-dir (io/file "release")
             :public-path ".")
      (cljs/step-find-resources-in-jars)
      (cljs/step-find-resources "src")

      (cljs/step-finalize-config)
      (cljs/step-compile-core)

      (cljs/step-configure-module :mori ['mori] #{})
      (cljs/step-configure-module :mori.chain ['mori.chain] #{:mori})
      (cljs/step-configure-module :mori.reducers ['mori.reducers] #{:mori})
      (cljs/step-configure-module :mori.zip ['mori.zip] #{:mori})
      (cljs/step-configure-module :mori.mutable ['mori.mutable] #{:mori})
      
      (cljs/step-compile-modules)
      (cljs/closure-optimize)
      (cljs/flush-modules-to-disk))

  ;; closure compiler thread hangs arround
  (System/exit 0))
