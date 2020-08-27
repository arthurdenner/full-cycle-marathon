# This can be improved

FROM node:12
WORKDIR /usr/src
COPY . /usr/src/
RUN yarn --frozen-lockfile
RUN yarn build
RUN yarn --production --frozen-lockfile
EXPOSE 3000
CMD ["yarn", "start:prod"]