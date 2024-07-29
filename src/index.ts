import { config } from "dotenv";

import { Cluster } from "src/cluster";

config();

const cluster = new Cluster(Number(process.env.CLUSTER_REPLICAS));