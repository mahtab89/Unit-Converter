# ===== Build Stage =====
FROM maven:3.9.6-eclipse-temurin-23 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# ===== Run Stage =====
FROM eclipse-temurin:23-jdk
WORKDIR /app
COPY --from=build /app/target/unitconverterwebapp-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
